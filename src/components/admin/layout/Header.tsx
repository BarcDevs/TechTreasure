/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wqUOQWXuSdh
 */
import {Link, useLocation} from 'react-router-dom'
import {Package2Icon, SearchIcon} from '@/components/admin/Icons.tsx'
import {Input} from '@/components/ui/input.tsx'
import UserDropdown from '@/components/layout/UserDropdown.tsx'
import {Button, buttonVariants} from '@/components/ui/button.tsx'
import {twMerge} from 'tailwind-merge'

const Header = ({}) => {
    const location = useLocation().pathname
    const isProductsPage = location.startsWith('/admin/products')

    return (
        <header
            className={`flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 lg:h-[60px] dark:bg-gray-800/40 ${isProductsPage ? 'justify-between' : 'justify-end'}`}>
            <Link className="lg:hidden" to={'account'}>
                <Package2Icon className="h-6 w-6"/>
                <span className="sr-only">Account</span>
            </Link>

            {isProductsPage &&
                <div className="w-full flex-1">
                    <form>
                        <div className="relative">
                            <SearchIcon
                                className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400"/>
                            <Input
                                className="w-full appearance-none bg-white pl-8 shadow-none md:w-2/3 lg:w-1/3 dark:bg-gray-950 no-focus"
                                placeholder="Search products..."
                                type="search"
                            />
                        </div>
                    </form>
                </div>}
            <Button className={twMerge(buttonVariants({ variant: "outline" }), 'text-black')} size="sm">
                <Link to={'/'}>Go to Regular Site</Link>
            </Button>
            <UserDropdown/>
        </header>
    )
}

export default Header
