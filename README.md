# Data Table Application
A feature-rich, interactive data table component built with vanilla JavaScript that provides sorting, filtering, searching, and pagination capabilities.
## 🚀 Features
- **Search**: Global search across multiple fields (date, customer, seller)
- **Filtering**: Column-specific filters with support for:
  - Text search (date, customer)
  - Dropdown selection (seller)
  - Range filtering (total amount)
- **Sorting**: Sort by date and total amount with ascending/descending toggle
- **Pagination**: Navigate through large datasets with configurable rows per page
- **Responsive Design**: Adapts to different screen sizes
- **Clean Architecture**: Modular component-based design
## 🛠️ Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd smart-table
```
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```
4. Build for production:
```bash
npm run build
```
## 💻 Usage
### Data Structure
The application expects data in the following format:
```javascript
{
  sellers: [{ id, first_name, last_name }],
  customers: [{ id, first_name, last_name }],
  purchase_records: [{
    receipt_id,
    date,
    seller_id,
    customer_id,
    total_amount
  }]
}
```
### Core Components
#### Table Component (`table.js`)
Renders the data table with customizable templates for header, filter, and row layouts.
#### Filtering (`filtering.js`)
Supports multiple filter types:
- Text filters (date, customer)
- Dropdown filters (seller)
- Range filters (total amount)
#### Sorting (`sorting.js`)
Implements click-to-sort functionality with visual indicators for sort direction.
#### Pagination (`pagination.js`)
Handles pagination with:
- First/Last page navigation
- Previous/Next page navigation
- Direct page selection
- Configurable rows per page
#### Searching (`searching.js`)
Provides global search across date, customer, and seller fields.
## 🎨 Styling
The application uses a modern design system with:
- CSS custom properties for theming
- Responsive breakpoints
- Consistent spacing and typography
- Interactive hover and focus states
- Custom icons for actions
## 🔧 Configuration
### Table Settings
```javascript
const settings = {
  tableTemplate: 'table',      // Template ID for the table
  rowTemplate: 'row',          // Template ID for rows
  before: ['search', 'header', 'filter'],  // Elements before table
  after: ['pagination']        // Elements after table
};
```
### Sorting Columns
```javascript
const columns = [
  sampleTable.header.elements.sortByDate,
  sampleTable.header.elements.sortByTotal
];
```
### Pagination Configuration
```javascript
// Configure visible pages count (default: 5)
const visiblePages = getPages(page, pageCount, 5);
```
## 📦 Dependencies
- [Vite](https://vitejs.dev/) - Build tool and development server
- No additional runtime dependencies
## 🧹 Code Quality
The application follows:
- **Modular architecture**: Each feature is isolated in its own module
- **Pure functions**: Minimizes side effects
- **Event delegation**: Efficient event handling
- **Template cloning**: Reuses DOM elements for performance
## 🌐 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
## 📄 License
This project is for educational purposes and is free to use.