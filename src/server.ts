import express from "express";
import { getPayloadClient } from "./get-payload";
import { nextApp, nextHandler } from "./next-util";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./trpc";
import { inferAsyncReturnType } from "@trpc/server";
import bodyParser from "body-parser";
import { IncomingMessage } from "http";
import { stripeWebhookHandler } from "./webhooks";
import nextBuild from "next/dist/build"
import path from "path";
import {parse} from 'url';
import { PayloadRequest } from "payload/types";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({
  req,
  res,
});

export type ExpressContext = inferAsyncReturnType<
typeof createContext
>;

export type WebhookRequest = IncomingMessage & { 
  rawBody: Buffer
 };

const start = async () => {
  const webhookMiddleware = bodyParser.json({
    verify: (req: WebhookRequest, _, buffer) => {
      req.rawBody = buffer;
    },
  });
  
  const payload = await getPayloadClient({
    initOptions: {
      // configure the Payload
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL ${cms.getAdminURL()}`);
      },
    },
  });
  app.post(
    "/api/webhooks/stripe", 
    webhookMiddleware, 
    stripeWebhookHandler);
    

    const cartRouter = express.Router()

    cartRouter.use(payload.authenticate)

    cartRouter.get("/",(req,res)=>{
      const request = req as PayloadRequest

      if(!request.user) return res.redirect('/sign-in?origin=cart')

      const parseUrl = parse(req.url,true)

      return nextApp.render(req,res,"/cart",parseUrl.query)
    })

    app.use("/cart",cartRouter)
    
  if(process.env.NEXT_BUILD){
    app.listen(PORT,async ()=>{
      payload.logger.info("Next.js is building for production")

      //@ts-expect-error
      await nextBuild(path.join(__dirname,'../'))

      process.exit()
    })

    return
  }

  app.use(
    "/api/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  app.use((req, res) => nextHandler(req, res)); //This line adds a middleware to the Express.js app

  nextApp.prepare().then(() => {
    payload.logger.info("Nextjs started");

    app.listen(PORT, async () => {
      payload.logger.info(
        `Next.js App URL : ${process.env.NEXT_PUBLIC_SERVER_URL}`
      );
    });
  });
};

start();
