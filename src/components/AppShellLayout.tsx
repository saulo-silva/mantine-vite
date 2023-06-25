import { AppShell, Navbar, Header } from '@mantine/core';
import type {ReactNode} from "react";
import MenuNavbar from "./MenuNavbar.tsx";

export default function AppShellLayout({ children }: { children: ReactNode }) {
    return (
        <AppShell
            padding="md"
            header={<Header height={60} p="xs">{/* Header content */}</Header>}
            navbar={<Navbar width={{ base: 300 }} height="100vh" p="xs"><MenuNavbar /></Navbar>}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
            {children}
        </AppShell>
    );
}
