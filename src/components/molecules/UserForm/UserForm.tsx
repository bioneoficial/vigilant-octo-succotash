import React from "react";

interface UserFormProps {
  handleSubmitUser: (event: React.FormEvent<HTMLFormElement>) => void;
  urlImageBannerSelection: string;
  setUrlImageBannerSelection: React.Dispatch<React.SetStateAction<string>>;
}

export const UserForm: React.FC<UserFormProps> = ({
  handleSubmitUser,
  urlImageBannerSelection,
  setUrlImageBannerSelection,
}) => {
  const handleUrlImageBannerSelectionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUrlImageBannerSelection(event.target.value);
  };

  return (
    <div>
      <h3>User Form</h3>
      <form onSubmit={handleSubmitUser}>
        <div>
          <label htmlFor="urlImageBannerSelection">Banner Image URL:</label>
          <input
            type="text"
            id="urlImageBannerSelection"
            value={urlImageBannerSelection}
            onChange={handleUrlImageBannerSelectionChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
