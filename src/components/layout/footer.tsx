export function Footer() {
  return (
    <footer className="px- divide-y divide-orange-500 bg-white  dark:bg-primary-800">
      <div className="mx-auto flex justify-between  max-w-7xl  gap-1 p-6 ">
        <div className="row-span-7 flex gap-12 w-80 justify-between text-primary-700 dark:text-primary-100 font-kennerly text-lg">
          <p>Projects</p>
          <p>Blogs</p>
          <p>About</p>
        </div>

        <div className="row-span-1 text-primary-500 font-kennerly text-center dark:text-primary-300">
          <p>© 2024 Nhi PHAM. All rights reserved.</p>
          <p>
            All the photos, images, logos and drawings in this website are
            designed, created by Nhi PHAM.
          </p>
        </div>
      </div>
    </footer>
  );
}
