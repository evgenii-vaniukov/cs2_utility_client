import Image from "next/image";
export default function Card({ utilityCollection }) {
  return (
    <article className="flex flex-col items-start justify-between rounded-xl p-2 shadow-md">
      <div className="relative aspect-[16/9] w-full rounded-2xl sm:aspect-[2/1] lg:aspect-[3/2]">
        <Image
          src={utilityCollection.thumbnail}
          alt=""
          fill={true}
          className=" rounded-xl"
        />
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          {/* <time dateTime={post.datetime} className="text-gray-500"></time> */}
          <p>time</p>

          <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
            {utilityCollection.teamCode}
          </p>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <p>
              <span className="absolute inset-0" />
              {utilityCollection.label}
            </p>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam
            vitae illo. Non aliquid explicabo necessitatibus unde. Sed
            exercitationem placeat consectetur nulla deserunt vel. Iusto
            corrupti dicta.
          </p>
        </div>
        {/* <div className="relative mt-8 flex items-center gap-x-4">
          <Image
            src={post.author.imageUrl}
            width={40}
            height={40}
            alt=""
            className="rounded-full bg-gray-100"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href={post.author.href}>
                <span className="absolute inset-0" />
                {post.author.name}
              </a>
            </p>
            <p className="text-gray-600">{post.author.role}</p>
          </div>
        </div> */}
      </div>
    </article>
  );
}
