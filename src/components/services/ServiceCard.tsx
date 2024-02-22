import { FunctionComponent } from "react";

// Types
import { Service } from "./ServiceData";

const ServiceCard: FunctionComponent<{ service: Service }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkup = () => {
    return { __html: about };
  };

  return (
    <div className="flex items-center p-2 sapce-x-4">
      <Icon className="min-w-10 h-12 mx-5 text-gray-600 dark:text-green-600" />
      <div>
        <h6 className="font-bold">{title}</h6>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
