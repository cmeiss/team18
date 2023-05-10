import React from "react";
import { render } from "@testing-library/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// eslint-disable-next-line @typescript-eslint/ban-types
export const renderWithDnd = (ui: {} | null | undefined) => {
    // eslint-disable-next-line react/prop-types
    return render(<DndProvider backend={HTML5Backend}>{ui}</DndProvider>);
};
