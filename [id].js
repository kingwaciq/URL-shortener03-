import { getUrl } from "./api/shorten";

export async function getServerSideProps({ params }) {
  const originalUrl = getUrl(params.id);

  if (!originalUrl) {
    return { notFound: true };
  }

  return {
    redirect: {
      destination: originalUrl,
      permanent: false,
    },
  };
}

export default function RedirectPage() {
  return null; // د ریدایرکټ له امله هیڅ ښکاره نه کېږي
} 
