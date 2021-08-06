import React from "react";
import {create, act} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("after creation <span> should be displayed", () => {
        let component;
        act(() => {
            component = create(<ProfileStatus status="It is my status"/>);
        });
        const instance = component.root;
        console.log(instance)
    });
    test("after creation <span> should be displayed", () => {
        let component;
        act(() => {
            component = create(<ProfileStatus status="It is my status"/>);
        });
        const instance = component.root;
        const span = instance.findByType("span");
        expect(span.props.children).not.toBeNull();
    });
    test("after creation <input> shouldn't be displayed", () => {
        let component;
        act(() => {
            component = create(<ProfileStatus status="It is my status"/>);
        });
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });
    test("after creation <span> should contains correct status", () => {
        let component;
        act(() => {
            component = create(<ProfileStatus status="It is my status"/>);
        });
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("It is my status");
    });
    test("input should be displayed in editMode instead of span", () => {
        let component;
        act(() => {
            component = create(<ProfileStatus status="It is my status"/>);
        });
        const root = component.root;
        let span = root.findByType("span");
        act(() => span.props.onDoubleClick());
        let input = root.findByType("input");
        expect(input.props.value).toBe("It is my status");
    });
});
