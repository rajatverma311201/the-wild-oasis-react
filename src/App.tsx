import { ReactNode, Suspense, lazy } from "react";
/* MODULE IMPORTS */

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { AppLayout } from "@/components/layout";

const Account = lazy(() => import("@/pages/Account"));
const Booking = lazy(() => import("@/pages/Booking"));
const Bookings = lazy(() => import("@/pages/Bookings"));
const Cabins = lazy(() => import("@/pages/Cabins"));
const Checkin = lazy(() => import("@/pages/Checkin"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Login = lazy(() => import("@/pages/Login"));
const PageNotFound = lazy(() => import("@/pages/PageNotFound"));
const Settings = lazy(() => import("@/pages/Settings"));
const Users = lazy(() => import("@/pages/Users"));

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ProtectedRoute } from "./features/authentication";
import { Logo, Spinner } from "./components/ui";
import styled from "styled-components";

const queryClient = new QueryClient();

const StyledLoader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    justify-content: center;
    margin-top: 20vh;
`;

const Loader = () => {
    return (
        <StyledLoader>
            <Logo />
            <Spinner />
        </StyledLoader>
    );
};

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <BrowserRouter>
                <Routes>
                    <Route
                        element={
                            <ProtectedRoute>
                                <AppLayout />
                            </ProtectedRoute>
                        }
                    >
                        <Route index element={<Navigate to="/dashboard" />} />
                        <Route
                            path="/account"
                            element={
                                <Susp>
                                    <Account />
                                </Susp>
                            }
                        />
                        <Route
                            path="/bookings"
                            element={
                                <Susp>
                                    <Bookings />
                                </Susp>
                            }
                        />
                        <Route
                            path="bookings/:bookingId"
                            element={
                                <Susp>
                                    <Booking />
                                </Susp>
                            }
                        />
                        <Route
                            path="checkin/:bookingId"
                            element={
                                <Susp>
                                    <Checkin />
                                </Susp>
                            }
                        />
                        <Route
                            path="/cabins"
                            element={
                                <Susp>
                                    <Cabins />
                                </Susp>
                            }
                        />
                        <Route
                            path="/dashboard"
                            element={
                                <Susp>
                                    <Dashboard />
                                </Susp>
                            }
                        />
                        <Route
                            path="/settings"
                            element={
                                <Susp>
                                    <Settings />
                                </Susp>
                            }
                        />
                        <Route
                            path="/users"
                            element={
                                <Susp>
                                    <Users />
                                </Susp>
                            }
                        />
                    </Route>
                    <Route
                        path="/login"
                        element={
                            <Susp>
                                <Login />
                            </Susp>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <Susp>
                                <PageNotFound />
                            </Susp>
                        }
                    />
                </Routes>
            </BrowserRouter>
            <Toaster
                position="top-center"
                gutter={12}
                containerStyle={{ margin: "8px" }}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                    },
                    style: {
                        fontSize: "16px",
                        maxWidth: "500px",
                        padding: "16px 24px",
                        backgroundColor: "var(--color-grey-0)",
                        color: "var(--color-grey-700)",
                    },
                }}
            />
        </QueryClientProvider>
    );
}

export default App;

const Susp = ({ children }: { children: ReactNode }) => {
    return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

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
