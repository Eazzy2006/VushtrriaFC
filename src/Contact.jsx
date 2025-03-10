import React from "react";

const Contact = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]">
        <div id="contacti" className="container">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
              <a id="kontakt"></a>
                <h2 className="lajmeth1 pb-2 border-bottom">
                  Kontakt
                </h2>
                
                <h2 className="mb-6 text-[36px] font-bold uppercase text-dark dark:text-white sm:text-[44px] lg:text-[40px] xl:text-[44px]">
                  Lidhuni me ne
                </h2>
                <p className="mb-9 text-lg leading-relaxed text-body-color dark:text-dark-6">
                  Ne jemi këtu për të ndihmuar. Kontaktoni me ne për çdo pyetje që keni.
                </p>

                {/* Location Section */}
                
                <div className="mb-10 flex w-full max-w-[400px]">
                  <div className="mr-6 flex h-[80px] w-full max-w-[80px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[90px] sm:max-w-[90px]">
                    {/* Location Icon */}
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-2xl font-bold text-dark dark:text-white">
                      Lokacioni yne
                    </h4>
                    <p className="text-lg text-body-color dark:text-dark-6">
                      99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                    </p>
                  </div>
                </div>

                {/* Phone Section */}
                <div className="mb-10 flex w-full max-w-[400px]">
                  <div className="mr-6 flex h-[80px] w-full max-w-[80px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[90px] sm:max-w-[90px]">
                    {/* Phone Icon */}
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_941_17577)">
                        <path
                          d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_941_17577">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-2xl font-bold text-dark dark:text-white">
                      Telefono
                    </h4>
                    <p className="text-lg text-body-color dark:text-dark-6">
                      +38345288876
                    </p>
                  </div>
                </div>

                {/* Email Section */}
                <div className="mb-10 flex w-full max-w-[400px]">
                  <div className="mr-6 flex h-[80px] w-full max-w-[80px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[90px] sm:max-w-[90px]">
                    {/* Email Icon */}
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_941_17582)">
                        <path
                          d="M29 4H3C1.9 4 1.01 4.9 1.01 6L1 26C1 27.1 1.9 28 3 28H29C30.1 28 31 27.1 31 26V6C31 4.9 30.1 4 29 4ZM29 8L16 16L3 8V6L16 14L29 6V8Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_941_17582">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-2xl font-bold text-dark dark:text-white">
                      Email
                    </h4>
                    <p className="text-lg text-body-color dark:text-dark-6">
                      osmaniidriz39@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default Contact;
