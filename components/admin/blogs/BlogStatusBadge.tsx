type Props = {
  published: boolean;
};

export default function BlogStatusBadge({
  published,
}: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
        published
          ? "bg-green-100 text-green-700"
          : "bg-yellow-100 text-yellow-700"
      }`}
    >
      <span
        className={`mr-2 h-2 w-2 rounded-full ${
          published ? "bg-green-500" : "bg-yellow-500"
        }`}
      />

      {published ? "Published" : "Draft"}
    </span>
  );
}