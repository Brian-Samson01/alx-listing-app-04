import axios from "axios";
import { useEffect, useState } from "react";

interface Review {
  id: string;
  comment: string;
  rating?: number;
  author?: string;
}

interface ReviewSectionProps {
  propertyId: string;
}

export default function ReviewSection({ propertyId }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!propertyId) return;

    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `/api/properties/${propertyId}/reviews`
        );
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="border p-3 rounded">
          <p className="text-gray-700">{review.comment}</p>

          {review.author && (
            <p className="text-sm text-gray-500 mt-1">
              — {review.author}
            </p>
          )}

          {review.rating && (
            <p className="text-sm font-semibold mt-1">
              Rating: {review.rating}/5
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
