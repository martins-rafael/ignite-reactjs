type User = {
  permissions: string[];
  roles: string[];
};

type validadeUserPermissionsParams = {
  user: User;
  permissions?: string[];
  roles?: string[];
};

export function validadeUserPermissions({
  user,
  permissions,
  roles
}: validadeUserPermissionsParams) {
  if (permissions?.length > 0) {
    const hasAllPermissions = permissions.every(permission => {
      return user.permissions.includes(permission);
    });

    if (!hasAllPermissions) {
      return false;
    }
  }

  if (roles?.length > 0) {
    const hasSomeRoles = roles.some(role => {
      return user.roles.includes(role);
    });

    if (!hasSomeRoles) {
      return false;
    }
  }

  return true;
}