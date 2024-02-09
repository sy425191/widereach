const MagicPageSelect = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "",
    borderColor: "",
    color: "",
    boxShadow: "none",
    "&:hover": {
      borderColor: "none",
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#475569" : "#0F172A",
    color: state.isSelected ? "" : "#64748b",
    "&:hover": {
      backgroundColor: "#5b636d",
      color: state.isSelected ? "" : "#1e293b",
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: "",
    color: "",
  }),
  input: (provided, state) => ({
    ...provided,
    color: "",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "",
  }),
};

export default MagicPageSelect;
