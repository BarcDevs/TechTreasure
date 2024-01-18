import {Link} from 'react-router-dom'
import {
    BellIcon,
    Package2Icon,
} from '@/components/admin/Icons.tsx'
import {Button} from '@/components/ui/button.tsx'
import {ADMIN_LINKS} from '@/constants'
import SidebarLink from '@/components/admin/layout/SidebarLink.tsx'

const storeName = 'Acme Inc'

const Sidebar = ({}) => (
    <aside className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-[60px] items-center border-b px-6">
                <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    to="#"
                >
                    <Package2Icon className="h-6 w-6"/>
                    <span>{storeName}</span>
                </Link>
                <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
                    <BellIcon className="h-4 w-4"/>
                    <span className="sr-only">Toggle notifications</span>
                </Button>
            </div>
            <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-4 text-sm font-medium">
                    {ADMIN_LINKS.map(link => (
                        <SidebarLink
                            key={link.href}
                            link={link}
                        />
                    ))}
                </nav>
            </div>
        </div>
    </aside>
)


export default Sidebar
