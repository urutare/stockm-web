/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import ThemeChanger from '@/components/shared/ThemeChanger';

export default function Home() {
  return (
    <>
      <Head>
        <meta
          property="og:url"
          content="https://next-enterprise.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Next.js Enterprise Boilerplate</title>
      </Head>
      <div className="h-full w-full bg-th-background font-sans text-th-primary-dark antialiased">
        <ThemeChanger />

        <main>
          <div className="relative bg-th-background px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
            <div className="relative mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-th-accent-medium sm:text-4xl">
                  From the blog
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-xl sm:mt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Ipsa libero labore natus atque, ducimus sed.
                </p>
              </div>
              <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=UsVmjgUMfb&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-th-background-secondary p-6">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-th-accent-medium">
                        <a href="#" className="hover:underline">
                          Article
                        </a>
                      </p>
                      <a href="#" className="mt-2 block">
                        <p className="text-xl font-semibold">
                          Boost your conversion rate
                        </p>
                        <p className="mt-3 text-base">
                          Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Architecto accusantium
                          praesentium eius, ut atque fuga culpa,
                          similique sequi cum eos quis dolorum.
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#">
                          <span className="sr-only">
                            Roel Aufderehar
                          </span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=UsVmjgUMfb&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">
                          <a href="#" className="hover:underline">
                            Roel Aufderehar
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm">
                          <time dateTime="2020-03-16">
                            Mar 16, 2020
                          </time>
                          <span aria-hidden="true">&middot;</span>
                          <span>6 min read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=UsVmjgUMfb&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-th-background-secondary p-6">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-th-accent-medium">
                        <a href="#" className="hover:underline">
                          Video
                        </a>
                      </p>
                      <a href="#" className="mt-2 block">
                        <p className="text-xl font-semibold">
                          How to use search engine optimization to
                          drive sales
                        </p>
                        <p className="mt-3 text-base">
                          Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Velit facilis asperiores
                          porro quaerat doloribus, eveniet dolore.
                          Adipisci tempora aut inventore optio animi.,
                          tempore temporibus quo laudantium.
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#">
                          <span className="sr-only">
                            Brenna Goyette
                          </span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixqx=UsVmjgUMfb&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">
                          <a href="#" className="hover:underline">
                            Brenna Goyette
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm">
                          <time dateTime="2020-03-10">
                            Mar 10, 2020
                          </time>
                          <span aria-hidden="true">&middot;</span>
                          <span>4 min read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixqx=UsVmjgUMfb&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-th-background-secondary p-6">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-th-accent-medium">
                        <a href="#" className="hover:underline">
                          Case Study
                        </a>
                      </p>
                      <a href="#" className="mt-2 block">
                        <p className="text-xl font-semibold">
                          Improve your customer experience
                        </p>
                        <p className="mt-3 text-base">
                          Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Sint harum rerum
                          voluptatem quo recusandae magni placeat
                          saepe molestiae, sed excepturi cumque
                          corporis perferendis hic.
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#">
                          <span className="sr-only">
                            Daniela Metz
                          </span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixqx=UsVmjgUMfb&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">
                          <a href="#" className="hover:underline">
                            Daniela Metz
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm">
                          <time dateTime="2020-02-12">
                            Feb 12, 2020
                          </time>
                          <span aria-hidden="true">&middot;</span>
                          <span>11 min read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
