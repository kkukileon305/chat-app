import Link from 'next/link';

const navs = ['login', 'register'];

const Header = () => {
  return (
    <header className='sticky top-0 bg-gray-300'>
      <div className='max-w-[1060px] px-4 w-full mx-auto flex justify-between items-center'>
        <h1 className='font-bold text-2xl'>
          <Link href={'/'}>Chat app</Link>
        </h1>
        <nav className='flex'>
          {navs.map(nav => (
            <Link href={`/${nav}`} key={nav}>
              {nav}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
export default Header;
