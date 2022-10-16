// Package ptr returns a pointer of any value by assigning it to a variable
package ptr

// Of returns the pointer of the input
func Of[T any](v T) *T {
	return &v
}
