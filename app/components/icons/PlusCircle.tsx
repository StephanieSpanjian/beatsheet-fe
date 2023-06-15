const PlusCircleIcon = () => {
  const iconSvg = (
    <div style={{ position: 'relative' }}>
      <svg
        className="text-emerald-800 hover:animate-pulse hover:text-lime-600"
        color="inherit"
        id="create-plus-circle-icon"
        height={50}
        width={50}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  )

  return iconSvg
}
export default PlusCircleIcon
