import { useState, useRef, useEffect } from "react";
import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
export default function ProjectTypeSelect() {
  const [value, setValue] = useState("Un proyecto web");
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const form = trigger.current?.closest("form");
    const reset = () => setValue("Un proyecto web");
    form?.addEventListener("reset", reset);
    return () => form?.removeEventListener("reset", reset);
  }, []);
  return (
    <div className="select-field">
      <span id="project-type-label">¿Qué tienes en mente?</span>
      <Select.Root name="project_type" value={value} onValueChange={setValue}>
        <Select.Trigger
          ref={trigger}
          className="select-trigger"
          aria-labelledby="project-type-label"
        >
          <Select.Value />
          <Select.Icon>
            <ChevronDown size={17} />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            className="select-content"
            position="popper"
            sideOffset={8}
            collisionPadding={16}
          >
            <Select.Viewport>
              {[
                "Un proyecto web",
                "Diseño UX/UI",
                "Una colaboración",
                "Otra idea",
              ].map((value) => (
                <Select.Item className="select-item" value={value} key={value}>
                  <Select.ItemText>{value}</Select.ItemText>
                  <Select.ItemIndicator>
                    <Check size={15} />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
