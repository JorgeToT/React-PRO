// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { lazy, ComponentType } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";
import ShoppingPage from "../02-component-patterns/pages/ShoppingPage";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: ComponentType | JSXComponent;
    name: string;
}

const LazyLayout = lazy(
    () =>
        import(
            /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
        )
);

export const routes: Route[] = [
    {
        to: "/lazyload/",
        path: "/lazyload/*",
        Component: LazyLayout,
        name: "LazyLayout - Dash",
    },
    {
        to: "/no-lazy",
        path: "no-lazy",
        Component: NoLazy,
        name: "No Lazy",
    },
    {
        to: "/",
        path: "*",
        Component: ShoppingPage,
        name: "Shopping",
    },
];
