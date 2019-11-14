import rules from '../rbac-rules';

// Imperatively checks whether the user has the permission or not 
const check = (rules, role, action, data) => {
  const permissions = rules[role];
  if (!permissions) {
    // Role is not present in the rules
    return false;
  }

  const staticPermissions = permissions.static;

  if (staticPermissions && staticPermissions.includes(action)) {
    return true;
  }

  const dynamicPermissions = permissions.dynamic;

  if (dynamicPermissions) {
    const permissionCondition = dynamicPermissions[action];
    if (!permissionCondition) {
      // Dynamic rule not provided for action
      return false;
    }

    return permissionCondition(data);
  }
  return false;
};

const Can = props =>
check(rules, props.role, props.perform, props.data)
  ? props.yes()
  : props.no();

  can.defaultProps = {
    yes: () => null,
    no: () => null
  };

  export default Can;
