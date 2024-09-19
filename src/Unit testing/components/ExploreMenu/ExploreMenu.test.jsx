import React from "react";
import { render } from "@testing-library/react";
import ExploreMenu from "../../../components/ExploreMenu/ExploreMenu";

describe('ExploreMenu', () => {
    it('renders without crashing', () => {
        render(<ExploreMenu></ExploreMenu>);
    });
});