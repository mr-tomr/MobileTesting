public String run(Activity excute) throws Exception{
  final OkHttpClient build = new OkHttpClient.Builder().certficatePinner( new CertificatePinner.builder().add("pinning.labs.sec575.org, new String[] {"sha256/47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=" })...);
  final RequestBuilder requestBuilder = new Request.Builder();
  final StringBuilder sb = new Stringbuilder();
  sb.append("https://");
  sb.append("pinning.labs.sec575.org");
  sb.append("/pinned.json");
  final Requet Build2 = request.Builder.url(sbb.toString()).build();
  try {
    execute = (Activity) build.newCall(build2).execute();
    ...
  }
}
