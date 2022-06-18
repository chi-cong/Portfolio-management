const keyfix = (key) => {
  switch (key) {
    case "about_des":
      return "about description";
    case "project":
      return "projects";
    case "exp":
      return "experiences";
    case "client":
      return "clients";
    case "review":
      return "reviews";
    case "lang":
      return "language";
    case "start_date":
      return "start date";
    case "end_date":
      return "end date";
    case "job_des":
      return "job description";
    case "behance":
      return "behance url";
    case "youtube":
      return "youtube url";
    case "github":
      return "github url";
    case "image":
      return "imange url";
    case "content_des":
      return "content description";
    case "contact_des":
      return "contact description";
    case "phone_number":
      return "phone number";
  }
  return key;
};

export default keyfix;
