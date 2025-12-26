import { Link, Youtube } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string;
  strSource: string | null;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
}

// export default async function Home({
//   searchParams,
// }: {
//   searchParams: { s?: string };
// }) {
//   const { s } = (await searchParams) || "";
//   const res = await fetch(
//     `https://www.themealdb.com/api/json/v1/1/search.php?s=${s}`
//   );
//   const { meals }: { meals: Meal[] } = await res.json();
//   return (
//     <div className="grid grid-cols-4 gap-4">
//       {meals.map((meal) => (
//         <Card key={meal.idMeal}>
//           <Image
//             src={meal.strMealThumb}
//             alt={meal.strMeal}
//             className="w-full rounded-t-3xl"
//             width={300}
//             height={300}
//           />

//           <CardHeader>
//             <CardTitle>{meal.strMeal}</CardTitle>
//             <CardDescription>
//               {meal.strCategory} - {meal.strArea}
//             </CardDescription>
//           </CardHeader>

//           <CardContent>
//             <p className="text-sm text-gray-700 whitespace-pre-line">
//               {meal.strInstructions
//                 .split(" ")
//                 .slice(1, 10)
//                 .join(" ")
//                 .concat("...")}
//             </p>
//           </CardContent>

//           <CardFooter className="flex items-center justify-start gap-4 pt-4 border-t">
//             {meal.strYoutube && (
//               <a
//                 href={meal.strYoutube}
//                 target="_blank"
//                 className="flex items-center gap-1 text-red-600 hover:text-red-700 transition-colors"
//               >
//                 <Youtube />
//                 Watch on YouTube
//               </a>
//             )}

//             {meal.strSource && (
//               <a
//                 href={meal.strSource}
//                 target="_blank"
//                 className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors"
//               >
//                 <Link />
//                 Source
//               </a>
//             )}
//           </CardFooter>
//         </Card>
//       ))}
//     </div>
//   );
// }
export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ s?: string }>;
}) {
  const resolvedPromise = await searchParams;
  const s = resolvedPromise?.s ?? "";
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${s}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const meals: Meal[] = data.meals ?? [];

  if (meals.length === 0) {
    return <p className="text-center text-gray-600 text-lg">No meals found</p>;
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {meals.map((meal) => (
        <Card key={meal.idMeal}>
          <Image
            src={meal.strMealThumb}
            alt={meal.strMeal}
            width={300}
            height={300}
            className="w-full rounded-t-3xl"
          />

          <CardHeader>
            <CardTitle>{meal.strMeal}</CardTitle>
            <CardDescription>
              {meal.strCategory} - {meal.strArea}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-gray-700">
              {meal.strInstructions.split(" ").slice(0, 10).join(" ")}...
            </p>
          </CardContent>

          <CardFooter className="flex gap-4 border-t pt-4">
            {meal.strYoutube && (
              <a
                href={meal.strYoutube}
                target="_blank"
                className="flex items-center gap-1 text-red-600"
              >
                <Youtube />
                YouTube
              </a>
            )}

            {meal.strSource && (
              <a
                href={meal.strSource}
                target="_blank"
                className="flex items-center gap-1 text-blue-600"
              >
                <Link />
                Source
              </a>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
