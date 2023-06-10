/* MODULE IMPORTS */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
/* COMPONENT IMPORTS */
// import { Button, Heading } from "@/components";
// import { Row, Column, Center } from "@/components/layout";
// import { Input } from "@/components/form";
import { AppLayout } from "@/components/layout";

/* PAGE IMPORTS */
import {
    Account,
    Bookings,
    Cabins,
    Dashboard,
    Login,
    PageNotFound,
    Settings,
    Users,
} from "@/pages";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route index element={<Navigate to="/dashboard" />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/bookings" element={<Bookings />} />
                        <Route path="/cabins" element={<Cabins />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/users" element={<Users />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;

/*
   <div>
                <Heading as="h1">H1 Hello World</Heading>
                <Heading as="h2">H2 Hello World</Heading>
                <Heading as="h3">H3 Hello World</Heading>
                <Heading as="h4">H4 Hello World</Heading>
            </div>

            <div>
                <Center>
                    <Button>Check In</Button>
                </Center>
            </div>
            <div>
                <Center>
                    <Input placeholder="Hello" />
                </Center>
            </div>
            <div>
                <Row justify="even">
                    <Button size="large">Check In</Button>
                    <Button variant="secondary">Check In</Button>
                </Row>
            </div>
            <div>
                <Center>
                    <Column align="center">
                        <Button size="small">Check In</Button>
                        <Button>Check In</Button>
                        <Button size="large">Check In</Button>
                    </Column>
                </Center>
            </div>
            <div>
                <Center>
                    <Column align="center">
                        <Button>Check In</Button>
                        <Button variant="secondary">Check In</Button>
                        <Button variant="danger">Check In</Button>
                    </Column>
                </Center>
            </div>


*/
