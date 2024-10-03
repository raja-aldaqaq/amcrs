# Asset Management Compliance Review System (AMCRS)

## Overview

This project is a full-stack application built to review flagged investment transactions in the secondary market system. The application allows a compliance team to approve or reject flagged transactions in real-time, with status persistence and an intuitive UI. It demonstrates a combination of C# .NET 8 for the back-end and a Next.js app using TypeScript for the front-end. The UI is built without using CSS frameworks like Bootstrap or Chakra, but styled using CSS modules and/or SCSS.

## Technologies Used

- **Back-end**: C# .NET Core 8
- **Front-end**: Next.js with TypeScript
- **Node**: v18
- **CSS Styling**: SCSS (without frameworks)
- **In-Memory Data Structure**: No database is used, data is stored in memory.

## Installation & Setup

### 1. Backend (C# .NET Core 8)
- To run the C# back-end project, open the solution in Visual Studio.

### 2. Frontend (Next.js with TypeScript)
- Navigate to the front-end directory.
- Install dependencies using Yarn:
  ```bash
  yarn install
  ```
- Run the development server:
    ```bash
    yarn next dev
    ```


### Running Both BE and FE

Both back-end and front-end should run simultaneously for the application to function correctly.

- **Back-end** (API) runs on port `7128`.
- **Front-end** runs on port `3000`.

Make sure both the front-end and back-end are running at the same time.

### Changing Ports (if necessary)

If you are using different ports, please adjust the URLs in the front-end and back-end.


## Features

### 1. Transaction Display
- Displays a list of flagged transactions, ordered from newest to oldest.
- Each transaction displays:
  - Transaction ID
  - Date
  - Buyer ID
  - Seller ID
  - Investment Type
  - Amount
  - Flagged Reason

### 2. Action Buttons
- Each transaction has two action buttons:
  - "Approve" - Marks the transaction as compliant.
  - "Reject" - Marks the transaction as non-compliant.
  
### 3. Status Update
- When an action is taken (Approve/Reject), the transaction’s status is updated in the back-end.
- Once the status is updated, the transaction disappears from the list in the UI.

### 4. Persistence
- Status of each transaction (Approved or Rejected) persists through page refreshes.
- Approved or Rejected transactions do not reappear after a page refresh.

### 5. Real-time Updates
- The UI reflects the transaction status immediately after an action without requiring a manual page refresh.



