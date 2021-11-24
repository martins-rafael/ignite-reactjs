import { useCan } from "../hooks/useCan";

type CanProps = {
  permissions?: string[];
  roles?: string[];
  children: React.ReactNode;
};

export function Can({ permissions, roles, children }: CanProps) {
  const userCanSeeComponent = useCan({
    permissions,
    roles
  });

  if (!userCanSeeComponent) {
    return null;
  }

  return (
    <>
      {children}
    </>
  );
}