export interface Link {
  url: string;
  text: string;
  iconClass: string;
}

export interface Role {
  title: string;
  items: string[];
}

export interface Content {
  name1: string;
  name2: string;
  subtitle: string;
  currentWorks: {
    title: string;
    items: string[];
  };
  links: {
    samples: Link;
    resume: Link;
  };
  contactItems: {
    email: Link;
    linkedin: Link;
    github: Link;
  };
  roles: {
    writer: Role;
    engineer: Role;
  };
  interestItems: {
    title: string;
    items: string[];
  };
}
