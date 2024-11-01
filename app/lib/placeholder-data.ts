const customers = [
  { id: 1, name: 'Customer One' },
  { id: 2, name: 'Customer Two' },
  // ... add more customers as needed
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  // ... additional invoice objects as needed
];