// invoicesList.tsx
import React from 'react';
import InvoiceStatus from './InvoiceStatus'; // Adjust the path if needed

const invoices = [
  {
    customer_id: 1,
    amount: 15795,
    status: "pending" as "pending" | "paid", // Ensures type compatibility
    date: "2022-12-06",
  },
  {
    customer_id: 2,
    amount: 20348,
    status: "paid" as "pending" | "paid",
    date: "2022-11-14",
  },
  // Add more invoices if needed
];

const InvoicesList: React.FC = () => {
  return (
    <div>
      {invoices.map((invoice, index) => (
        <div key={index}>
          <p>Customer ID: {invoice.customer_id}</p>
          <p>Amount: ${invoice.amount}</p>
          <p>Date: {invoice.date}</p>
          <InvoiceStatus status={invoice.status} /> {/* Passes restricted type */}
        </div>
      ))}
    </div>
  );
};

export default InvoicesList;

   