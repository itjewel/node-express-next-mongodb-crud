
 const Header = () => {
  return (
    <>
     <header className="bg-boxdark-2 text-white py-4 px-10">
  <div className="container mx-auto">
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold">CRUD</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-gray-300">Home</a></li>
          <li><a href="/login" className="hover:text-gray-300">Login</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>

    </>
  )
}

export default Header