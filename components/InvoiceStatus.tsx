// components/InvoiceStatus.tsx
import React from 'react';
import clsx from 'clsx';

type InvoiceStatusProps = {
  status: 'pending' | 'paid'; // Allowed statuses
};

const InvoiceStatus: React.FC<InvoiceStatusProps> = ({ status }) => {
  const statusClass = clsx({
    'text-gray-500': status === 'pending', // Gray for pending
    'text-green-600': status === 'paid',    // Green for paid
  });

  return <span className={statusClass}>{status}</span>; // Display the status
};

export default InvoiceStatus; // Export the component
