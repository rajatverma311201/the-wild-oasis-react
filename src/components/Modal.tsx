import React, {
    cloneElement,
    createContext,
    useContext,
    useState,
} from "react";

import styled from "styled-components";

const Overlay = styled.div`
    width: "100%";
    height: "100vh";
    position: "fixed";
    top: 0;
    left: 0;
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-lg);
    padding: 3.2rem 4rem;
    transition: all 0.5s;
`;

type ModalContextType = {
    open: (value: string) => void;
    openName: string;
    close: () => void;
};

const ModalContext = createContext<ModalContextType>({
    open: (a: string) => {
        return;
    },
    openName: "",
    close: () => {
        return;
    },
});

function Modal({ children }: { children: React.ReactNode }) {
    const [openName, setOpenName] = useState("");
    const open = (val: string) => setOpenName(val);
    const close = () => setOpenName("");

    return (
        <ModalContext.Provider value={{ open, openName, close }}>
            {children}
        </ModalContext.Provider>
    );
}

function Open({
    children,
    opens: opensWindowName,
}: {
    children: React.ReactElement;
    opens: string;
}) {
    const { open } = useContext(ModalContext);

    return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({
    children,
    name: windowName,
}: {
    children: React.ReactElement;
    name: string;
}) {
    const { openName, close } = useContext(ModalContext);

    if (openName != windowName) return null;

    return cloneElement(children, { onCloseModal: close });
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
