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
    <div className='mt-16 grid grid-cols-2 gap-x-4 text-sm text-gray-200'>
      <div>
        <p className='font-medium text-gray-400'>
          Shipping To
        </p>
        <p>{orderEmail}</p>
      </div>

      <div className='flex-col md:flex-row gap-2' >
        <p className='font-medium text-gray-400'>
          Order Status
        </p>
        <p>
          {isPaid
            ? <span className='text-green-600'  >Payment Successful</span>
            : <span className='text-red-600' >Pending payment</span>}
        </p>
      </div>
    </div>
  )
}

export default PaymentStatus