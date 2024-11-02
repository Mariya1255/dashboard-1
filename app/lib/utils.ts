// Import necessary types from definitions
import { Revenue } from './definitions'; // Make sure the path is correct

/**
 * Formats a number as currency in USD.
 * @param amount - The amount to format.
 * @returns A string representing the formatted currency.
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

/**
 * Calculates the highest revenue from an array of revenue data.
 * @param revenue - Array of Revenue objects.
 * @returns The top label rounded up to the nearest thousand.
 */
export function calculateHighestRevenue(revenue: Revenue[]): number {
  // Check if revenue is not empty to avoid errors
  if (revenue.length === 0) return 0; 

  // Calculate the highest revenue safely
  const highestRecord = Math.max(...revenue.map((item) => item.revenue));

  // Round up to the nearest thousand
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  return topLabel; // Return the calculated top label
}

// Example usage of the function
const revenueData: Revenue[] = [
  { month: 'January', revenue: 2000 },
  { month: 'February', revenue: 3000 },
  // Add more monthly data as necessary
];

// Call the function to test it
const highestRevenue = calculateHighestRevenue(revenueData);
console.log('Highest Revenue:', highestRevenue);
