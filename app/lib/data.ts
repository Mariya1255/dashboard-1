import { sql } from '@vercel/postgres';
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoice,
  Revenue,
} from './definitions'; // Ensure this path matches your file structure

import { formatCurrency } from './utils';

// Define the CustomerType as needed
export type CustomerType = {
  id: string;          // Unique identifier for the customer
  name: string;        // Name of the customer
  email: string;       // Email address of the customer
  image_url?: string;  // Optional URL for the customer's image
};

// Fetch revenue data
export async function fetchRevenue() {
  try {
    const data = await sql<Revenue>`SELECT * FROM revenue`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

// Fetch latest invoices
export async function fetchLatestInvoices() {
  try {
    const data = await sql<LatestInvoice>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`;

    const latestInvoices = data.rows.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

// Continue with the rest of your functions...
