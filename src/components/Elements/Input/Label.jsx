const Label = () => {
  const { htmlFor } = "my-input";
  return (
    <label 
    htmlFor="{htmlFor}" 
    className="block text-slate-400 text-sm font-bold mb-2"
    >Email</label>
  )
  
};

export default Label;
