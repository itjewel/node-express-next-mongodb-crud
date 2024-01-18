// components/AdminSidebar.js
const AdminSidebar = () => {
    return (
      <aside className="bg-gray-800 h-full w-64 fixed top-0 left-0 overflow-y-auto text-white">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="/" className="flex items-center px-4 py-2 rounded-md hover:bg-gray-700">
                  <span className="material-icons">dashboard</span>
                  <span className="ml-2">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/users" className="flex items-center px-4 py-2 rounded-md hover:bg-gray-700">
                  <span className="material-icons">people</span>
                  <span className="ml-2">Users</span>
                </a>
              </li>
              <li>
                <a href="/products" className="flex items-center px-4 py-2 rounded-md hover:bg-gray-700">
                  <span className="material-icons">shopping_cart</span>
                  <span className="ml-2">Products</span>
                </a>
              </li>
              {/* Add more menu items as needed */}
            </ul>
          </nav>
        </div>
      </aside>
    );
  };
  
  export default AdminSidebar;
  