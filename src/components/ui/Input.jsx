import React from 'react'

const Input = React.forwardRef(({
  label,
  id,
  type = 'text',
  error,
  helperText,
  required = false,
  disabled = false,
  placeholder,
  className = '',
  'aria-describedby': ariaDescribedby,
  ...props
}, ref) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
  const errorId = `${inputId}-error`
  const helperId = `${inputId}-helper`

  const baseClasses = 'input'
  const errorClasses = error ? 'input-error' : ''
  const classes = `${baseClasses} ${errorClasses} ${className}`

  const ariaDescribedBy = []
  if (error) ariaDescribedBy.push(errorId)
  if (helperText) ariaDescribedBy.push(helperId)
  if (ariaDescribedby) ariaDescribedBy.push(ariaDescribedby)

  return (
    <div className="space-y-1">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
          {required && <span className="text-danger ml-1" aria-label="required">*</span>}
        </label>
      )}

      <input
        ref={ref}
        id={inputId}
        type={type}
        className={classes}
        disabled={disabled}
        aria-disabled={disabled}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={ariaDescribedBy.length > 0 ? ariaDescribedBy.join(' ') : undefined}
        aria-required={required}
        placeholder={placeholder}
        {...props}
      />

      {error && (
        <p
          id={errorId}
          className="text-sm text-danger"
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      )}

      {helperText && !error && (
        <p
          id={helperId}
          className="text-sm text-gray-500"
        >
          {helperText}
        </p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input