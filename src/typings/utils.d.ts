type IfNever<T, A, B = never> = [T] extends [never] ? A : B
