import { useState, useRef, useEffect } from "react";
import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { copy, type Language } from "../i18n";
const values = ["web", "ux", "collaboration", "other"];
export default function ProjectTypeSelect({
  language,
}: {
  language: Language;
}) {
  const t = copy[language];
  const [value, setValue] = useState("web");
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const form = trigger.current?.closest("form");
    const reset = () => setValue("web");
    form?.addEventListener("reset", reset);
    return () => form?.removeEventListener("reset", reset);
  }, []);
  return (
    <div className="select-field">
      <span id="project-type-label">{t.ideaType}</span>
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
              {values.map((option, index) => (
                <Select.Item
                  className="select-item"
                  value={option}
                  key={option}
                >
                  <Select.ItemText>{t.projectTypes[index]}</Select.ItemText>
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
