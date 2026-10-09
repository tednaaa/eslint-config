export function asObject<T extends object>(value: boolean | T | undefined): T | false {
	if (value === false)
		return false;
	return value === true || value === undefined ? {} as T : value;
}
