
type ClassNames = string | undefined | boolean

export const getClassNames = (classes: ClassNames[]): string => {
  const enabledClasses = classes.filter((value) => !!value)

  return enabledClasses.join(' ')
}