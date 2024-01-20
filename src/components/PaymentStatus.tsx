'use client'

import { trpc } from '@/trpc/client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface PaymentStatusProps {
  orderEmail: string
  orderId: string
  isPaid: boolean
}

const PaymentStatus = ({
  orderEmail,
  orderId,
  isPaid,
}: PaymentStatusProps) => {
  const router = useRouter()

  const { data } = trpc.payment.pollOrderStatus.useQuery(
    { orderId },
    {
      enabled: isPaid === false,
      refetchInterval: (data) =>
        data?.isPaid ? false : 1000,
    }
  )

  useEffect(() => {
    if (data?.isPaid) router.refresh()
  }, [data?.isPaid, router])

  return (
    <div className='mt-16 flex flex-col md:flex-row text-sm gap-5 md:justify-between text-gray-600'>
      <div className='flex flex-col gap-2  ' >
        <p className='font-medium text-gray-300'>
          Shipping To
        </p>
        <p>{orderEmail}</p>
      </div>

      <div className='flex flex-col gap-2 ' >
        <p className='font-medium text-gray-300'>
          Order Status
        </p>
        <p>
          {isPaid
            ? 'Payment successful'
            : 'Pending payment'}
        </p>
      </div>
    </div>
  )
}

export default PaymentStatus