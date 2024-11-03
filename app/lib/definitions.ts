export type FormattedCustomersTable = { 
  id: string;
  name: string;
  email: string;
  image_url?: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
/* your type definition */ };

// Define the type for the customers table
export type CustomerField = {
  id: string;          // Unique identifier for the customer
  name: string;        // Name of the customer
  email: string;       // Email address of the customer
  image_url?: string;  // Optional URL for the customer's image
};

// Define the type for the customers table
export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url?: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
  // Add more fields as required
};

// Define the type for an individual customer
export type CustomerType = {
  id: string;          // Unique identifier for the customer
  name: string;        // Name of the customer
  email: string;       // Email address of the customer
  image_url?: string;  // Optional URL for the customer's image
  total_invoices: number;
  total_pending: number;
  total_paid: number;
  phone?: string;      // Customer's phone number (optional)
  createdAt: Date;     // Date when the customer was created
};

// Define the type for an invoice
export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  status: 'pending' | 'paid'; // Status can only be 'pending' or 'paid'
};

// Define the type for invoice forms
export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

// Define the type for a collection of invoices
export type InvoicesTable = Invoice[];

// Define the type for raw latest invoices data
export type LatestInvoice = {
  amount: number;
  name: string;
  image_url?: string;
  email: string;
  id: string;
};

// Define the type for revenue data
export type Revenue = {
  // Define the structure based on your revenue data
  month: string;
  revenue: number;
  // Add other relevant fields as required
};
