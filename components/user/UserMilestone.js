import Icon from "../Icon";

export default function UserMilestone({ milestone }) {
  return (
    <a
      href={milestone.url}
      key={milestone.url}
      target="_blank"
      rel="noreferrer"
      style={{
        borderColor: milestone.color,
      }}
    >
      <li
        className="py-4 border-l-2 mb-4 pl-2 hover:border-l-4 pr-2 shadow-md"
        style={{
          borderColor: milestone.color,
        }}
      >
        <div className="flex space-x-3">
          <Icon name={milestone.icon} />
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">{milestone.title}</h3>
              <p className="text-sm text-gray-500">{milestone.date}</p>
            </div>
            <p className="text-sm text-gray-500">{milestone.description}</p>
          </div>
        </div>
      </li>
    </a>
  );
}
