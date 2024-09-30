import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export function ReusableContextMenu({
  children, // Custom trigger content
  menuItems = [], // Menu items, including submenus, radio items, checkbox items
  className = "w-64", // Default class for ContextMenuContent
}) {
  return (
    <ContextMenu>
      {/* Dynamic trigger content */}
      <ContextMenuTrigger className="">{children}</ContextMenuTrigger>
      <ContextMenuContent className={className}>
        {menuItems.map((item, index) => {
          // Render separator
          if (item.type === "separator") {
            return <ContextMenuSeparator key={index} />;
          }

          // Render checkbox items
          if (item.type === "checkbox") {
            return (
              <ContextMenuCheckboxItem
                key={index}
                checked={item.checked}
                onClick={item.onClick}
                className="focus:bg-primary  focus:visible-primary"
              >
                {item.label}
                {item.shortcut && (
                  <ContextMenuShortcut>{item.shortcut}</ContextMenuShortcut>
                )}
              </ContextMenuCheckboxItem>
            );
          }

          // Render radio groups
          if (item.type === "radio-group") {
            return (
              <ContextMenuRadioGroup
                key={index}
                value={item.value}
                onValueChange={item.onChange}
                className="focus:bg-primary  focus:visible-primary"
              >
                <ContextMenuLabel inset>{item.label}</ContextMenuLabel>
                <ContextMenuSeparator />
                {item.options.map((option, optIndex) => (
                  <ContextMenuRadioItem
                    className="w-48 focus:bg-primary  focus:visible-primary"
                    key={optIndex}
                    value={option.value}
                  >
                    {option.label}
                  </ContextMenuRadioItem>
                ))}
              </ContextMenuRadioGroup>
            );
          }

          // Render submenus
          if (item.type === "submenu") {
            return (
              <ContextMenuSub
                key={index}
                className="focus:bg-primary focus:visible-primary"
              >
                <ContextMenuSubTrigger
                  inset
                  className="focus:bg-primary hover:bg-none focus:visible-primary"
                >
                  {item.label}
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-48 hover:bg-none focus:bg-primary focus:visible-primary">
                  {item.submenuItems.map((subItem, subIndex) => (
                    <ContextMenuItem
                      key={subIndex}
                      onClick={subItem.onClick}
                      className="focus:bg-primary hover:bg-none focus:visible-primary"
                    >
                      {subItem.label}
                      {subItem.shortcut && (
                        <ContextMenuShortcut>
                          {subItem.shortcut}
                        </ContextMenuShortcut>
                      )}
                    </ContextMenuItem>
                  ))}
                </ContextMenuSubContent>
              </ContextMenuSub>
            );
          }

          // Default to normal items
          return (
            <ContextMenuItem
              className="focus:bg-primary focus:text-white cursor-pointer hover:text-white focus:visible-primary"
              key={index}
              inset
              onClick={item.onClick}
            >
              {item.label}
              {item.shortcut && (
                <ContextMenuShortcut>{item.shortcut}</ContextMenuShortcut>
              )}
            </ContextMenuItem>
          );
        })}
      </ContextMenuContent>
    </ContextMenu>
  );
}
