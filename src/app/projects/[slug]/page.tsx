type Props = { params: { slug: string } };

export default function Page({ params }: Props) {
  return <div>Project: {params.slug}</div>;
}
