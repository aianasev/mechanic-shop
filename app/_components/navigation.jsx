import { useContext } from "react";
import { AuthContext } from "@/app/_utils/auth-context";
import tryCatch from "@/app/_utils/try-catch";
import { useRouter } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import Logo from "@/app/_icons/Logo";

export default function Navigation({ navItems, isNarrow=false }) {
    const { user, customer, signOut } = useContext(AuthContext);
    const route = useRouter();

    const signOutStaff = async () => {
        if (user) {
            const [data, error] = await tryCatch(() => signOut());
            if (error) {
                console.error(error);
            }
        }
        route.push('/client-side');
    };

    return (
        <div className="w-full fixed top-0 sm:top-2 z-10 flex justify-center items-center">
            <div className={clsx(
                "inline-flex justify-between items-center gap-2 h-12 transition-all duration-300 font-serif tracking-wide",
                isNarrow ?
                "w-[95%] lg:w-[55%] bg-white/30 backdrop-blur-sm rounded-full mx-auto px-4 shadow-md text-gray-900" :
                "w-full bg-transparent px-[0.5em] sm:px-[10em] text-white"
            )}>
                <div className="inline-flex justify-center items-center gap-1 z-10">
                    <h1 className="text-sm sm:text-2xl font-bold text-accent">Photography</h1>
                </div>
                <nav className="inline-flex justify-center items-center gap-2 z-10">
                    {navItems &&
                        navItems.map((navItem) => (
                            <Link
                                key={navItem.href}
                                className="btn btn-ghost btn-xs sm:btn-md border-0 shadow-none rounded-full hover:bg-transparent hover:text-accent transition text-inherit"
                                href={navItem.href}
                            >
                                {navItem.label}
                            </Link>
                        ))}
                </nav>
                <button className="btn btn-soft btn-accent btn-xs sm:btn-sm rounded-full z-10 font-medium">
                    Request Booking
                </button>
                <div className="inline-flex justify-center items-center gap-2 z-10">
                    {customer ? (
                        <Link href="/client-side">
                            <img className="size-8 rounded-full" src={customer.avatar || "/default-avatar.png"} alt="customer avatar" />
                        </Link>
                    ) : (
                        <>
                            <button
                                className={clsx("btn btn-outline btn-xs sm:btn-sm text-inherit", isNarrow && "btn-xs rounded-full")}
                                onClick={signOutStaff}
                            >
                                Sign In
                            </button>
                            <Link
                                className={clsx("btn btn-accent btn-xs sm:btn-sm font-medium", isNarrow && "btn-xs rounded-full")}
                                href="/signup"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

